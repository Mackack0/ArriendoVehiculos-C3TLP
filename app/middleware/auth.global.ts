export default defineNuxtRouteMiddleware(async () => {
  const { user } = await useUserSession();

  if (user.value) {
    return;
  }
});
