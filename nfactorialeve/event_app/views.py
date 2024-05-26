from rest_framework import viewsets,status
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from .models import Event,Registration
from .serializers import EventSerializer,RegistrationSerializer
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    @action(detail=True, methods=['get'])
    def details(self, request, pk=None):
        event = self.get_object()
        serializer = EventSerializer(event)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def register(self, request, pk=None):
        event = self.get_object()
        user = request.user
        registration = Registration(event=event, user=user)
        registration.save()
        return Response({'status': 'registered'}, status=status.HTTP_201_CREATED)



