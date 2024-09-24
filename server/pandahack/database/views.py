from django.shortcuts import render
from .models import UserInfo
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json


# Create your views here.
@csrf_exempt
def queryUserInfo(request):
    if request.method == 'POST':
        name = json.loads(request.body)['name']
        print("name of request: ", name)
        try:
            user = UserInfo.objects.get(name=name)  # Fetch the user by name
            bamboo_count = user.bamboos  # Get the bamboo count
            return JsonResponse({'bamboo_count': bamboo_count})  # Return as JSON response
        except UserInfo.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)  # Return error if user not found
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)  # Handle invalid request method

@csrf_exempt
def queryBambooCount(request):
    if request.method == 'POST':
        name = json.loads(request.body)['name']
        print("name of request: ", name)
        try:
            user = UserInfo.objects.get(name=name)  # Fetch the user by name
            bamboo_count = user.bamboos  # Get the bamboo count
            return HttpResponse(str(bamboo_count))  # Return as JSON response
        except UserInfo.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)  # Return error if user not found
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)  # Handle invalid request method

@csrf_exempt
def decreaseBambooCount(request):
    if request.method == 'GET':
        # Get the 'name' parameter from the query string
        name = request.GET.get('name')
        print("Name from request: ", name)
        
        if not name:
            return JsonResponse({'error': 'Name parameter is required'}, status=400)  # Handle missing name parameter
        
        try:
            user = UserInfo.objects.get(name=name)  # Fetch the user by name
            if user.bamboos > 0:
                user.bamboos -= 1  # Decrease the bamboo count by 1
                user.save()  # Save the updated user instance
                return JsonResponse({'bamboo_count': user.bamboos})  # Return the updated bamboo count
            else:
                return JsonResponse({'error': 'No bamboos left to decrease'}, status=400)  # Handle if no bamboos left
        except UserInfo.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)  # Return error if user not found
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)  # Handle invalid request method

