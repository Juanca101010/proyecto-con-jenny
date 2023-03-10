from django.db import models

# Create your models here.
class posiciones (models.Model):
    nombre= models.CharField(max_length=45, null=False)
    calificacionj= models.IntegerField(null=True)
    calificacionc= models.IntegerField(null=True)
    likes= models.IntegerField(null=True)

    def _str_(self):
        return "%s" % (self.nombre)

    class Meta:
        app_label= 'app'
