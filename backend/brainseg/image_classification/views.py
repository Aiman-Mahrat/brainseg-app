from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import MRIImage
from .serializers import MRIImageSerializer

# Create your views here.
class MRIImageUploadedView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = MRIImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)