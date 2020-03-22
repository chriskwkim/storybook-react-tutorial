import React from 'react';

export default function Task({ task: { id, title, state }, onSnoozeTask, onArchiveTask, onPinTask }) {
    return (
        <div className="list-item">
            <input type="text" value={title} readOnly={true} />
        </div>
    )
}