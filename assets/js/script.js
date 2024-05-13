document.addEventListener('DOMContentLoaded', function() {
const V1 = document.getElementById('v1');
const resizeHandlesV1 = V1.querySelectorAll('.resize-handle');

let isResizingV1 = false;
let isDraggingV1 = false;
let startXV1, startYV1;
let startWidthV1, startHeightV1;
let startTopV1, startLeftV1;

resizeHandlesV1.forEach(handle => {
    handle.addEventListener('mousedown', (e) => {
        isResizingV1 = true;
        startXV1 = e.clientX;
        startYV1 = e.clientY;
        startWidthV1 = V1.offsetWidth;
        startHeightV1 = V1.offsetHeight;
        startTopV1 = V1.offsetTop;
        startLeftV1 = V1.offsetLeft;
    });
});

V1.addEventListener('mousedown', (e) => {
    startXV1 = e.clientX;
    startYV1 = e.clientY;
    startTopV1 = V1.offsetTop;
    startLeftV1 = V1.offsetLeft;
    isDraggingV1 = true;
});

document.addEventListener('mousemove', (e) => {
    if (isResizingV1) {
        const deltaX = e.clientX - startXV1;
        const deltaY = e.clientY - startYV1;

        if (resizeHandlesV1[0].contains(e.target)) { // Top-left handle
            const newWidth = startWidthV1 - deltaX;
            const newHeight = startHeightV1 - deltaY;
            const newLeft = startLeftV1 + deltaX;
            const newTop = startTopV1 + deltaY;
            if (newWidth > 0 && newHeight > 0 && newTop >= 0 && newLeft >= 0 &&
                newTop + newHeight <= window.innerHeight &&
                newLeft + newWidth <= window.innerWidth) {
                V1.style.width = `${newWidth}px`;
                V1.style.height = `${newHeight}px`;
                V1.style.left = `${newLeft}px`;
                V1.style.top = `${newTop}px`;
            }
        } else if (resizeHandlesV1[1].contains(e.target)) { // Top-right handle
            const newWidth = startWidthV1 + deltaX;
            const newHeight = startHeightV1 - deltaY;
            const newTop = startTopV1 + deltaY;
            if (newWidth > 0 && newHeight > 0 && newTop >= 0 &&
                newTop + newHeight <= window.innerHeight &&
                startLeftV1 + newWidth <= window.innerWidth) {
                V1.style.width = `${newWidth}px`;
                V1.style.height = `${newHeight}px`;
                V1.style.top = `${newTop}px`;
            }
        } else if (resizeHandlesV1[2].contains(e.target)) { // Bottom-left handle
            const newWidth = startWidthV1 - deltaX;
            const newHeight = startHeightV1 + deltaY;
            const newLeft = startLeftV1 + deltaX;
            if (newWidth > 0 && newHeight > 0 && newLeft >= 0 &&
                newLeft + newWidth <= window.innerWidth &&
                startTopV1 + newHeight <= window.innerHeight) {
                V1.style.width = `${newWidth}px`;
                V1.style.height = `${newHeight}px`;
                V1.style.left = `${newLeft}px`;
            }
        } else if (resizeHandlesV1[3].contains(e.target)) { // Bottom-right handle
            const newWidth = startWidthV1 + deltaX;
            const newHeight = startHeightV1 + deltaY;
            if (newWidth > 0 && newHeight > 0 &&
                startTopV1 + newHeight <= window.innerHeight &&
                startLeftV1 + newWidth <= window.innerWidth) {
                V1.style.width = `${newWidth}px`;
                V1.style.height = `${newHeight}px`;
            }
        }
    } else if (isDraggingV1) {
        const newX = e.clientX - startXV1;
        const newY = e.clientY - startYV1;
        const newLeft = startLeftV1 + newX;
        const newTop = startTopV1 + newY;
        if (newLeft >= 0 && newTop >= 0 &&
            newTop + V1.offsetHeight <= window.innerHeight &&
            newLeft + V1.offsetWidth <= window.innerWidth) {
            V1.style.left = `${newLeft}px`;
            V1.style.top = `${newTop}px`;
        }
    }
});

document.addEventListener('mouseup', () => {
    isResizingV1 = false;
    isDraggingV1 = false;
});
const V2 = document.getElementById('v2');
const resizeHandlesV2 = V2.querySelectorAll('.resize-handle');

let isResizingV2 = false;
let isDraggingV2 = false;
let startXV2, startYV2;
let startWidthV2, startHeightV2;
let startTopV2, startLeftV2;

resizeHandlesV2.forEach(handle => {
    handle.addEventListener('mousedown', (e) => {
        isResizingV2 = true;
        startXV2 = e.clientX;
        startYV2 = e.clientY;
        startWidthV2 = V2.offsetWidth;
        startHeightV2 = V2.offsetHeight;
        startTopV2 = V2.offsetTop;
        startLeftV2 = V2.offsetLeft;
    });
});

V2.addEventListener('mousedown', (e) => {
    startXV2 = e.clientX;
    startYV2 = e.clientY;
    startTopV2 = V2.offsetTop;
    startLeftV2 = V2.offsetLeft;
    isDraggingV2 = true;
});

document.addEventListener('mousemove', (e) => {
    if (isResizingV2) {
        const deltaX = e.clientX - startXV2;
        const deltaY = e.clientY - startYV2;

        if (resizeHandlesV2[0].contains(e.target)) { // Top-left handle
            const newWidth = startWidthV2 - deltaX;
            const newHeight = startHeightV2 - deltaY;
            const newLeft = startLeftV2 + deltaX;
            const newTop = startTopV2 + deltaY;
            if (newWidth > 0 && newHeight > 0 && newTop >= 0 && newLeft >= 0 &&
                newTop + newHeight <= window.innerHeight &&
                newLeft + newWidth <= window.innerWidth) {
                V2.style.width = `${newWidth}px`;
                V2.style.height = `${newHeight}px`;
                V2.style.left = `${newLeft}px`;
                V2.style.top = `${newTop}px`;
            }
        } else if (resizeHandlesV2[1].contains(e.target)) { // Top-right handle
            const newWidth = startWidthV2 + deltaX;
            const newHeight = startHeightV2 - deltaY;
            const newTop = startTopV2 + deltaY;
            if (newWidth > 0 && newHeight > 0 && newTop >= 0 &&
                newTop + newHeight <= window.innerHeight &&
                startLeftV2 + newWidth <= window.innerWidth) {
                V2.style.width = `${newWidth}px`;
                V2.style.height = `${newHeight}px`;
                V2.style.top = `${newTop}px`;
            }
        } else if (resizeHandlesV2[2].contains(e.target)) { // Bottom-left handle
            const newWidth = startWidthV2 - deltaX;
            const newHeight = startHeightV2 + deltaY;
            const newLeft = startLeftV2 + deltaX;
            if (newWidth > 0 && newHeight > 0 && newLeft >= 0 &&
                newLeft + newWidth <= window.innerWidth &&
                startTopV2 + newHeight <= window.innerHeight) {
                V2.style.width = `${newWidth}px`;
                V2.style.height = `${newHeight}px`;
                V2.style.left = `${newLeft}px`;
            }
        } else if (resizeHandlesV2[3].contains(e.target)) { // Bottom-right handle
            const newWidth = startWidthV2 + deltaX;
            const newHeight = startHeightV2 + deltaY;
            if (newWidth > 0 && newHeight > 0 &&
                startTopV2 + newHeight <= window.innerHeight &&
                startLeftV2 + newWidth <= window.innerWidth) {
                V2.style.width = `${newWidth}px`;
                V2.style.height = `${newHeight}px`;
            }
        }
    } else if (isDraggingV2) {
        const newX = e.clientX - startXV2;
        const newY = e.clientY - startYV2;
        const newLeft = startLeftV2 + newX;
        const newTop = startTopV2 + newY;
        if (newLeft >= 0 && newTop >= 0 &&
            newTop + V2.offsetHeight <= window.innerHeight &&
            newLeft + V2.offsetWidth <= window.innerWidth) {
            V2.style.left = `${newLeft}px`;
            V2.style.top = `${newTop}px`;
        }
    }
});

document.addEventListener('mouseup', () => {
    isResizingV2 = false;
    isDraggingV2 = false;
});
const v3 = document.getElementById('v3');
const resizeHandlesV3 = v3.querySelectorAll('.resize-handleV3');

let isResizingV3 = false;
let isDraggingV3 = false;
let startXV3, startYV3;
let startWidthV3, startHeightV3;
let startTopV3, startLeftV3;

resizeHandlesV3.forEach(handle => {
    handle.addEventListener('mousedown', (e) => {
        isResizingV3 = true;
        startXV3 = e.clientX;
        startYV3 = e.clientY;
        startWidthV3 = v3.offsetWidth;
        startHeightV3 = v3.offsetHeight;
        startTopV3 = v3.offsetTop;
        startLeftV3 = v3.offsetLeft;
    });
});

v3.addEventListener('mousedown', (e) => {
    startXV3 = e.clientX;
    startYV3 = e.clientY;
    startTopV3 = v3.offsetTop;
    startLeftV3 = v3.offsetLeft;
    isDraggingV3 = true;
});

document.addEventListener('mousemove', (e) => {
    if (isResizingV3) {
        const deltaX = e.clientX - startXV3;
        const deltaY = e.clientY - startYV3;

        if (resizeHandlesV3[0].contains(e.target)) { // Top-left handle
            const newWidth = startWidthV3 - deltaX;
            const newHeight = startHeightV3 - deltaY;
            const newLeft = startLeftV3 + deltaX;
            const newTop = startTopV3 + deltaY;
            if (newWidth > 0 && newHeight > 0 && newTop >= 0 && newLeft >= 0 &&
                newTop + newHeight <= window.innerHeight &&
                newLeft + newWidth <= window.innerWidth) {
                v3.style.width = `${newWidth}px`;
                v3.style.height = `${newHeight}px`;
                v3.style.left = `${newLeft}px`;
                v3.style.top = `${newTop}px`;
            }
        } else if (resizeHandlesV3[1].contains(e.target)) { // Top-right handle
            const newWidth = startWidthV3 + deltaX;
            const newHeight = startHeightV3 - deltaY;
            const newTop = startTopV3 + deltaY;
            if (newWidth > 0 && newHeight > 0 && newTop >= 0 &&
                newTop + newHeight <= window.innerHeight &&
                startLeftV3 + newWidth <= window.innerWidth) {
                v3.style.width = `${newWidth}px`;
                v3.style.height = `${newHeight}px`;
                v3.style.top = `${newTop}px`;
            }
        } else if (resizeHandlesV3[2].contains(e.target)) { // Bottom-left handle
            const newWidth = startWidthV3 - deltaX;
            const newHeight = startHeightV3 + deltaY;
            const newLeft = startLeftV3 + deltaX;
            if (newWidth > 0 && newHeight > 0 && newLeft >= 0 &&
                newLeft + newWidth <= window.innerWidth &&
                startTopV3 + newHeight <= window.innerHeight) {
                v3.style.width = `${newWidth}px`;
                v3.style.height = `${newHeight}px`;
                v3.style.left = `${newLeft}px`;
            }
        } else if (resizeHandlesV3[3].contains(e.target)) { // Bottom-right handle
            const newWidth = startWidthV3 + deltaX;
            const newHeight = startHeightV3 + deltaY;
            if (newWidth > 0 && newHeight > 0 &&
                startTopV3 + newHeight <= window.innerHeight &&
                startLeftV3 + newWidth <= window.innerWidth) {
                v3.style.width = `${newWidth}px`;
                v3.style.height = `${newHeight}px`;
            }
        }
    } else if (isDraggingV3) {
        const newX = e.clientX - startXV3;
        const newY = e.clientY - startYV3;
        const newLeft = startLeftV3 + newX;
        const newTop = startTopV3 + newY;
        if (newLeft >= 0 && newTop >= 0 &&
            newTop + v3.offsetHeight <= window.innerHeight &&
            newLeft + v3.offsetWidth <= window.innerWidth) {
            v3.style.left = `${newLeft}px`;
            v3.style.top = `${newTop}px`;
        }
    }
});

document.addEventListener('mouseup', () => {
    isResizingV3 = false;
    isDraggingV3 = false;
});
const v4 = document.getElementById('v4');
const resizeHandles = v4.querySelectorAll('.resize-handle');

let isResizing = false;
let isDragging = false;
let startX, startY;
let startWidth, startHeight;
let startTop, startLeft;

resizeHandles.forEach(handle => {
    handle.addEventListener('mousedown', (e) => {
        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = v4.offsetWidth;
        startHeight = v4.offsetHeight;
        startTop = v4.offsetTop;
        startLeft = v4.offsetLeft;
    });
});

v4.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    startY = e.clientY;
    startTop = v4.offsetTop;
    startLeft = v4.offsetLeft;
    isDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (isResizing) {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        if (resizeHandles[0].contains(e.target)) { // Top-left handle
            const newWidth = startWidth - deltaX;
            const newHeight = startHeight - deltaY;
            const newLeft = startLeft + deltaX;
            const newTop = startTop + deltaY;
            if (newWidth > 0 && newHeight > 0 && newTop >= 0 && newLeft >= 0 &&
                newTop + newHeight <= window.innerHeight &&
                newLeft + newWidth <= window.innerWidth) {
                v4.style.width = `${newWidth}px`;
                v4.style.height = `${newHeight}px`;
                v4.style.left = `${newLeft}px`;
                v4.style.top = `${newTop}px`;
            }
        } else if (resizeHandles[1].contains(e.target)) { // Top-right handle
            const newWidth = startWidth + deltaX;
            const newHeight = startHeight - deltaY;
            const newTop = startTop + deltaY;
            if (newWidth > 0 && newHeight > 0 && newTop >= 0 &&
                newTop + newHeight <= window.innerHeight &&
                startLeft + newWidth <= window.innerWidth) {
                v4.style.width = `${newWidth}px`;
                v4.style.height = `${newHeight}px`;
                v4.style.top = `${newTop}px`;
            }
        } else if (resizeHandles[2].contains(e.target)) { // Bottom-left handle
            const newWidth = startWidth - deltaX;
            const newHeight = startHeight + deltaY;
            const newLeft = startLeft + deltaX;
            if (newWidth > 0 && newHeight > 0 && newLeft >= 0 &&
                newLeft + newWidth <= window.innerWidth &&
                startTop + newHeight <= window.innerHeight) {
                v4.style.width = `${newWidth}px`;
                v4.style.height = `${newHeight}px`;
                v4.style.left = `${newLeft}px`;
            }
        } else if (resizeHandles[3].contains(e.target)) { // Bottom-right handle
            const newWidth = startWidth + deltaX;
            const newHeight = startHeight + deltaY;
            if (newWidth > 0 && newHeight > 0 &&
                startTop + newHeight <= window.innerHeight &&
                startLeft + newWidth <= window.innerWidth) {
                v4.style.width = `${newWidth}px`;
                v4.style.height = `${newHeight}px`;
            }
        }
    } else if (isDragging) {
        const newX = e.clientX - startX;
        const newY = e.clientY - startY;
        const newLeft = startLeft + newX;
        const newTop = startTop + newY;
        if (newLeft >= 0 && newTop >= 0 &&
            newTop + v4.offsetHeight <= window.innerHeight &&
            newLeft + v4.offsetWidth <= window.innerWidth) {
            v4.style.left = `${newLeft}px`;
            v4.style.top = `${newTop}px`;
        }
    }
});

document.addEventListener('mouseup', () => {
    isResizing = false;
    isDragging = false;
});
})