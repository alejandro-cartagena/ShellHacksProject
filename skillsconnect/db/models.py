from django.db import models

# Create your mode here.
class Companies(models.Model):
    skills = models.CharField(max_length=200)
    companies = models.CharField(max_length=200)

    def __str__(self):
        return self.skills
