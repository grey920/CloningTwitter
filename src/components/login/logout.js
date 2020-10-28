import React from 'react'

export default function logout() {
    localStorage.clear('user');
    alert('다음에 만나요:)')
    return window.location.href = '/'
}