from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.parsers import FileUploadParser
from rest_framework.views import APIView
from .models import Companies
from .serializers import *

class FileUploadViews(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):
        serializer = documentSerializer(data=request.data)

        if serializer.is_valid():
            file = request.data['file']
            with open('C:/ResumeDocuments/' + file.name, 'wb+') as destination:
                for chunk in file.chunks():
                    destination.write(chunk)

            return Response({'message': 'Resume uploaded successfully'},status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
