from django.db import models

from django.conf import settings
from datetime import date


class Jugador(models.Model):
    """Model representing an Person."""
    nombreUsuario = models.CharField(max_length=100)
    fechaDeExito = models.DateField(default=date.today)

    class Meta:
        ordering = ['fechaDeExito']

    def get_absolute_url(self):
        """Returns the URL to access a particular author instance."""
        return reverse('jugador-detail', args=[str(self.id)])

    def __str__(self):
        """String for representing the Model object."""
        return self.nombreUsuario
