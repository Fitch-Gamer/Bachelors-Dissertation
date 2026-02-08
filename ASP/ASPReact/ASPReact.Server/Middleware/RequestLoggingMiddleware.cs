using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace ASPReact.Server.Middleware
{
    public sealed class RequestLoggingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<RequestLoggingMiddleware> _logger;

        public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var request = context.Request;

            // Prefer X-Forwarded-For / X-Real-IP when behind proxies; fall back to connection remote IP.
            string? ip = null;
            if (request.Headers.TryGetValue("X-Forwarded-For", out var xff) && !string.IsNullOrEmpty(xff))
            {
                // X-Forwarded-For can contain multiple IPs, use first
                ip = xff.ToString().Split(',')[0].Trim();
            }
            else if (request.Headers.TryGetValue("X-Real-IP", out var xri) && !string.IsNullOrEmpty(xri))
            {
                ip = xri.ToString();
            }
            else
            {
                ip = context.Connection.RemoteIpAddress?.ToString() ?? "unknown";
            }

            var userAgent = request.Headers["User-Agent"].ToString();
            var url = $"{request.Scheme}://{request.Host}{request.Path}{request.QueryString}";
            var method = request.Method;

            _logger.LogInformation("Incoming request {Method} {Url} from IP {IP} User-Agent: {UserAgent}",
                method, url, ip, string.IsNullOrEmpty(userAgent) ? "unknown" : userAgent);

            await _next(context);
        }
    }
}
