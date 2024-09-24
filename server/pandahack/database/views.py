from django.shortcuts import render
from .models import UserInfo
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Sum
from django.db import transaction
from django.http import JsonResponse
from django.db.models import Q
import random
import time
import json


# Create your views here.
@csrf_exempt
def getRewards(request):
    if request.method == 'GET':
        try:
            total_sum = (UserInfo.objects.aggregate(Sum('total_contributions'))['total_contributions__sum']) * 0.15
            if total_sum is None:
                total_sum = 0
            return JsonResponse({'total_contributions': total_sum})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)

@csrf_exempt
def startFlawedDemocracy(request):
    counter = 0
    names = ["Ava", "Noah", "Charlie", "David", "Eve", "Frank", "Grace", "Elijah", "Ivy", "Abigail"]

    while counter < 60:
        with transaction.atomic():
            # Generate random values
            name = random.choice(names)+str(counter)
            contributions = random.randint(1, 20)
            bamboos = random.randint(0, 10)

            # Create new UserInfo entry
            UserInfo.objects.create(
                name=name,
                total_contributions=contributions,
                bamboos=bamboos
            )

            print(f"Created entry: {name} | contributions: {contributions} | bamboos: {bamboos}")

        # Wait for 0.5 seconds before creating the next entry
        time.sleep(0.5)
        counter += 1
    return HttpResponse("Flawed democracy started")

@csrf_exempt
def queryBambooCount(request):
    if request.method == 'POST':
        name = json.loads(request.body)['name']
        print("queryBamboo | name of request: ", name)
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
    # if request.method == 'GET':
        # Get the 'name' parameter from the query string
        name = json.loads(request.body)['name']
        print("decreaseBamboo | name of request: ", name)
        
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
    # else:
    #     return JsonResponse({'error': 'Invalid request method'}, status=400)  # Handle invalid request method

@csrf_exempt
def receiveOrder(request):
    try:
        # Parse the JSON request body
        data = json.loads(request.body)
        name = data.get('name')
        contribution = data.get('contribution')
        print("name: "+name+" | contribution: "+contribution)
        
        if not name or contribution is None:
            return JsonResponse({"error": "Missing 'name' or 'contribution' in request"}, status=400)
        
        # Validate the contribution to be integer
        try:
            contribution = int(contribution)
        except ValueError:
            return JsonResponse({"error": "'contribution' should be an integer."}, status=400)

        # Find the user in the database
        user = UserInfo.objects.get(name=name)

        # Update the user's bamboo points and total contributions
        user.bamboos += contribution
        user.total_contributions += contribution
        user.save()

        # Return a success response
        return JsonResponse({"message": "Order received successfully!", "user": str(user)}, status=200)

    except ObjectDoesNotExist:
        return JsonResponse({"error": "User not found"}, status=404)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

@csrf_exempt
def aryanRaceGo(request):
    UserInfo.objects.exclude(name="EcoPioneer").delete()
    return HttpResponse("db cleared!")
