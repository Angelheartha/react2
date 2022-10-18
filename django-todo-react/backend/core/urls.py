from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPairWithColorView, AuthInfoGetView ,CustomUserCreate, HelloWorldView, LogoutAndBlacklistRefreshTokenForUserView



urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('user/mypage/', AuthInfoGetView.as_view()),
    path('token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist')
]


