from rest_framework import serializers
from .models import MRIImage

class MRIImageSerializer(serializers.ModelSerializer):
    class Meta: 
        model = MRIImage
        fields = ('id', 'image', 'uploaded_at')