from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.parsers import FileUploadParser
from rest_framework.views import APIView
from .models import Companies
from .serializers import *

# class FileUploadViews(APIView):
#     parser_class = (FileUploadParser,)

#     def post(self, request, *args, **kwargs):
#         serializer = documentSerializer(data=request.data)

#         if serializer.is_valid():
#             file = request.data['file']
#             with open('C:/ResumeDocuments/' + file.name, 'wb+') as destination:
#                 for chunk in file.chunks():
#                     destination.write(chunk)

#             return Response({'message': 'Resume uploaded successfully'},status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

import PyPDF2
import textract
import docx2txt
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Companies
from .serializers import dbSerializer, documentSerializer


@csrf_exempt
def resumeParserJSON(request):
    if request.method == 'POST':
        try:
           
            pdf_file = request.FILES.get('pdf_resume')
            docx_file = request.FILES.get('docx_resume')

            
            def extract_text_from_pdf(pdf_file):
                pdf_text = ""
                try:
                    pdf_reader = PyPDF2.PdfFileReader(pdf_file)
                    for page_num in range(pdf_reader.numPages):
                        page = pdf_reader.getPage(page_num)
                        pdf_text += page.extractText()
                except Exception as e:
                    return str(e)
                return pdf_text

            
            def extract_text_from_docx(docx_file):
                docx_text = ""
                try:
                    docx_text = docx2txt.process(docx_file)
                except Exception as e:
                    return str(e)
                return docx_text

            pdf_text = ""
            docx_text = ""

            
            if pdf_file and pdf_file.name.endswith('.pdf'):
                pdf_text = extract_text_from_pdf(pdf_file)

            
            if docx_file and docx_file.name.endswith('.docx'):
                docx_text = extract_text_from_docx(docx_file)

            candidate_text = pdf_text + docx_text

            
            skills_from_db = Companies.objects.values_list('skills', flat=True)

            
            candidate_skills = [skill for skill in skills_from_db if skill in candidate_text]

            
            matches = []

            
            if candidate_skills:
                matching_companies = Companies.objects.filter(skills__in=candidate_skills).values('skills', 'companies', 'location', 'pay', 'postdate', 'link')
                for row in matching_companies:
                    matches.append({
                        'skills': row['skills'],
                        'company': row['companies'],
                        'location': row['location'],
                        'pay': row['pay'],
                        'postdate': row['postdate'],
                        'link': row['link'],
                    })

            
            return JsonResponse({'message': 'Resume parsed successfully', 'data': {'candidate_skills': candidate_skills, 'matches': matches}})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)

@api_view(['GET', 'POST'])
def skillscompanies(request):
    if request.method == 'GET':
        data = Companies.objects.all()
        serializer = dbSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = dbSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
