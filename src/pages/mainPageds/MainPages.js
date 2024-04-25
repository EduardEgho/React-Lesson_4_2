import React from 'react';

function MainPages({user}) {
    return (
        <div>
            <h1>Добро пожаловать {user.name} {user.lastName}, мы тебя ждали</h1>
        </div>
    );
}

export default MainPages;