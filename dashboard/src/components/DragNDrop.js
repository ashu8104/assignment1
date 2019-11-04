import React, { Component } from 'react';

export default class DragNDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          taskID:'1',
          task: 'Complete Project'
        },
        {
          taskID: '2',
          task: 'Things To implement'
        },
        {
          taskID: '3',
          task: 'Completed Task'
        }
      ],
      completedTasks: [],
      draggedTask: {}
    }
  }

  onDrag = (event, todo) => {
    event.preventDefault();
    this.setState({
      draggedTask: todo
    });
  }

  onDragOver = (event) => {
    event.preventDefault();
  }

  onDrop = (event ) => {
    const { completedTasks, draggedTask, todos } = this.state;
    this.setState({
      completedTasks: [...completedTasks, draggedTask],
      todos: todos.filter(task => task.taskID !== draggedTask.taskID),
      draggedTask: {},
    })
  }
  render() {
    const { todos, completedTasks} = this.state;
    return (
      <div className="App">
        <div className="todos">
          {
            todos.map(todo =>
              <div className="draggable-component"
                key={todo.taskID}
                draggable
                onDrag={(event) => this.onDrag(event, todo)}
                >
                {todo.task}
              </div>
            )
          }
        </div>
        <div
        className="draggable-component"
          onDrop={event => this.onDrop(event)}
          onDragOver={(event => this.onDragOver(event))}
          className="done"
        >
          {completedTasks.map((task, index) =>
            <div
              key={task.taskID}
            >
              {task.task}
            </div>
          )}
        </div>
      </div>
    );
  }
}
