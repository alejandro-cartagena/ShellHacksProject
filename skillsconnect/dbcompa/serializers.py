from rest_framework import serializers
from .models import Companies

class dbSerializer(serializers.ModelSerializer):

    class Meta:
        model = Companies
        fields = ('id', 'skills', 'companies', 'location', 'pay', 'postdate', 'link')

class documentSerializer(serializers.Serializer):
    file = serializers.FileField()