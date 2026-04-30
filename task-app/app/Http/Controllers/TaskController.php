<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    // READ: Get all tasks and show them
    public function index()
    {
        $tasks = Task::latest()->get();
        return view('tasks.index', compact('tasks'));
    }

    // CREATE: Save a new task
    public function store(Request $request)
    {
        Task::create([
            'title' => $request->title
        ]);
        return redirect()->back();
    }

    // UPDATE: Toggle the 'is_done' status
    public function update($id)
    {
        $task = Task::findOrFail($id);
        $task->is_done = !$task->is_done;
        $task->save();
        return redirect()->back();
    }

    // DELETE: Remove a task
    public function destroy($id)
    {
        Task::destroy($id);
        return redirect()->back();
    }
}