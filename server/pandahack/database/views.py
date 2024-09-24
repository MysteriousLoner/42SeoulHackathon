from django.shortcuts import render
from .models import UserInfo
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json


# Create your views here.
@csrf_exempt
def total_contributions(request):
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
        user.bamboos += 1
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
