<!DOCTYPE html>
<html>
<head>
    <title>Task App</title>
</head>
<body>
    <h1>Task Manager</h1>

    <!-- ADD TASK FORM -->
    <form method="POST" action="/tasks">
        @csrf
        <input type="text" name="title" placeholder="New Task" required>
        <button type="submit">Add</button>
    </form>

    <hr>

    <!-- TASK LIST -->
    @foreach($tasks as $task)
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
            
            <!-- CHECKBOX BUTTON (TOGGLE) -->
            <form method="POST" action="/tasks/{{ $task->id }}">
                @csrf
                @method('PATCH')
                <button type="submit">
                    {{ $task->is_done ? '✓' : 'X' }}
                </button>
            </form>

            <!-- TASK TITLE -->
            <span style="margin: 0 10px; {{ $task->is_done ? 'text-decoration: line-through;' : '' }}">
                {{ $task->title }}
            </span>

            <!-- DELETE BUTTON -->
            <form method="POST" action="/tasks/{{ $task->id }}">
                @csrf
                @method('DELETE')
                <button type="submit" style="color: red;">Delete</button>
            </form>
            
        </div>
    @endforeach
</body>
</html>