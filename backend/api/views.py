from .models import Jugador
from .serializers import JugadorSerializer
from rest_framework import viewsets


class JugadorViewSet(viewsets.ModelViewSet):
    queryset = Jugador.objects.all()
    serializer_class = JugadorSerializer
    