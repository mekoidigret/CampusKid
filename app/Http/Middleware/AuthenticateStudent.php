<?php

namespace App\Http\Middleware;

use Closure;

class AuthenticateStudent
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$request->user()->isStudent()) {
            return response(['message' => 'Unauthenticated'], 403);
        }
        return $next($request);
    }
}
