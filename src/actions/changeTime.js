export const CHANGE_TIME = 'CHANGE_TIME';

export function changeTime(timeCounter)
{
    const newTime = timeCounter + 1;
    return {
        type: 'CHANGE_TIME',
        payload: {
            time: new Date(),
            elapsedTime: newTime,
        }
    };
}
