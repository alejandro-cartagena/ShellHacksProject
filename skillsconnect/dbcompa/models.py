from django.db import models

# Create your mode here.
class Companies(models.Model):
    skills = models.CharField(max_length=200)
    companies = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    pay = models.IntegerField()
    postdate = models.CharField(max_length=200)
    link = models.CharField(max_length=200)

    def __str__(self):
        return self.skills
