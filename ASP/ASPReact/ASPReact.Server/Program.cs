using ASPReact.Server.Middleware;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Register request-logging middleware early so ALL requests (including static files) are logged.
app.UseMiddleware<RequestLoggingMiddleware>();

app.UseDefaultFiles();
app.MapStaticAssets();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// Explicitly specify the HTTPS port used for redirects (match your launchSettings.json https profile port)
app.UseHttpsRedirection(new Microsoft.AspNetCore.HttpsPolicy.HttpsRedirectionOptions
{
    HttpsPort = 7236
});

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
