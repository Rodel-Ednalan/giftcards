<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Giftcards extends Model
{
    use HasFactory;

   /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
      'sender_id',
      'reciever_id',
      'title',
      'card',
  ];
}
