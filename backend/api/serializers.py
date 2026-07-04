from .models import Jugador
from rest_framework import serializers
from better_profanity import profanity


palabras_censuradas = [
    "mierda",
    "joder",
    "gilipollas",
    "cabrón",
    "coño",
    "puta",
    "puto"
]

class JugadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jugador
        fields = ['id', 'nombreUsuario', 'fechaDeExito']

    def validate_nombreUsuario(self, value):
        if profanity.contains_profanity(value) or palabras_censuradas.contains(value):
            raise serializers.ValidationError(
                "El nombre de usuario contiene contenido no permitido."
            )
        return value