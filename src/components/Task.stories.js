import React from 'react';
import { storiesOf, action } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Task from './Task';

function buildStory(attrs) {
    const task = {
        id: Math.rount(Math.random() * 1000000).toString(),
        title: 'Test Task',
        subtitle: 'on Test Board',
        url: 'http://test.url',
        state: 'TASK_INBOX',
        updatedAt: Date.now(),
        ...attrs,
    };
    const onPinTask = action('onPinTask');
    const onSnoozeTask = action('onSnoozeTask');
    const onArchiveTask = action('onArchiveTask');

    return <Task {...{ task, onPinTask, onSnoozeTask, onArchiveTask }} />;
}

storiesOf('Task', module)
    .addDecorator(story => (
        <div className="list-items" style={{ background: 'white' }}>{story()}</div>
    ))
    .add('inbox task', () => buildStory({ state: 'TASK_INBOX' }))
    .add('snoozed task', () => buildStory({ state: 'TASK_SNOOZED' }))
    .add('pinned task', () => buildStory({ state: 'TASK_PINNED' }))
    .add('archived task', () => buildStory({ state: 'TASK_ARCHIVED' }));

/*
export const task = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAd: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
    .add('default', () => <Task task={task} {...actions} />)
    .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED'}} {...ACTIONS} />)
    .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);

*/