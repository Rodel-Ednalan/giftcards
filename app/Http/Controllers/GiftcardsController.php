<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use App\Models\Giftcards;

class GiftcardsController extends Controller
{
    public function sent($id): JsonResponse
    {
        $giftcards = Giftcards::join('users', 'users.id', '=', 'giftcards.sender_id')
        ->where('users.id', '=', $id)
        ->get();

        return response()->json(['data' => $giftcards], 201);
    }

    public function recieved($id): JsonResponse
    {
        $giftcards = Giftcards::join('users', 'users.id', '=', 'giftcards.reciever_id')
        ->where('users.id', '=', $id)
        ->get();

        return response()->json(['data' => $giftcards], 201);
    }

    public function create(Request $request): JsonResponse
    {
        $request->validate([
            'sender_id' => ['required', 'integer'],
            'reciever_id' => ['required', 'integer'],
            'title' => ['required', 'string'],
            'card' => ['required', 'string'],
        ]);

        $Giftcards = Giftcards::create([
            'sender_id' => $request['sender_id'],
            'reciever_id' => $request['reciever_id'],
            'title' => $request['title'],
            'card' => $request['card'],
        ]);

        // $request->session()->regenerate();
        return response()->json(['data' => $Giftcards], 201);
    }
}
