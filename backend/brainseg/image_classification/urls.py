from django.urls import path
from .views import MRIImageUploadedView

urlpatterns = [
    path('upload/', MRIImageUploadedView.as_view(), name='image-upload'),
]