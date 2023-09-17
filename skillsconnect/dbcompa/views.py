from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Companies
from .serializers import *

@api_view(['GET'])
def skillscompanies(request):
    if request.method == 'GET':
        data = Companies.objects.all()
        serializer = dbSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
