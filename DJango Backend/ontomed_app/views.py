from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def test(request):
    api_urls = {
        'status': 'OK',
        'Msg':'Hello bhai kese ho !!'
    }
    return Response(api_urls)