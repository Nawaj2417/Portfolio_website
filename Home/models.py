from django.db import models

# Create your models here.
class About(models.Model):
    image = models.ImageField(upload_to="images")
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    description = models.TextField()
    resume = models.FileField(upload_to='files')
    experience = models.IntegerField()
    project_success = models.IntegerField()
    rate = models.IntegerField()

    def __str__(self) -> str:
        return self.name                   # called it as string representation method. 
                                          #it will return the objects in string format to display in a human readable format
    
    
class Education(models.Model):
    Academy_name = models.CharField(max_length=100)
    year_of_completion = models.DateField()
    degree = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.Academy_name
    
class Skills(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to="images")

    def __str__(self) -> str:
        return self.name

class Experience(models.Model):
    date = models.DateField()
    title = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self) -> str:
        return self.title



class Projects(models.Model):
    image = models.ImageField(upload_to="images")
    name = models.CharField(max_length=100)
    source_code = models.URLField(max_length=100)
    view_project = models.URLField(max_length=200)
    video = models.URLField(max_length=200)

    def __str__(self) -> str:
        return self.name

class Service(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self) -> str:
        return self.name
    
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self) -> str:
        return self.name


class Link(models.Model):
    name = models.CharField(max_length=100)
    link = models.URLField(max_length=200)
    icon = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name