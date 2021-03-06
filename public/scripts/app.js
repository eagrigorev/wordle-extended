import { KEYS, ROWS, FIELD, KEYBOARD } from './const.js';
import { addLetter, deleteLetter, checkWordle } from './letterOperations.js';
import { gameOver } from './letterOperations.js';
import { getWordle } from './getWordle.js';
getWordle();
ROWS.forEach((row, rowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.setAttribute('id', `row-${rowIndex}`);
    row.forEach((tile, tileIndex) => {
        const tileElement = document.createElement('div');
        tileElement.setAttribute('id', `row-${rowIndex}-tile-${tileIndex}`);
        tileElement.classList.add('game-container__tile');
        rowElement.append(tileElement);
    });
    if (FIELD != null) {
        FIELD.append(rowElement);
    }
});
KEYS.forEach((key) => {
    const button = document.createElement('button');
    button.textContent = key;
    button.setAttribute('id', key);
    button.addEventListener('click', () => handleClick(key));
    if (KEYBOARD != null) {
        KEYBOARD.append(button);
    }
});
const handleClick = (key) => {
    if (!gameOver) {
        if (key === 'DELETE') {
            deleteLetter();
            return;
        }
        if (key === 'ENTER') {
            checkWordle();
            return;
        }
        addLetter(key);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsU0FBUyxFQUFFLENBQUM7QUFFWixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBYSxFQUFFLFFBQWdCLEVBQUUsRUFBRTtJQUMvQyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsRUFBRTtRQUM5QyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sUUFBUSxTQUFTLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDcEUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNsRCxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2pCLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDMUI7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtJQUMzQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0QsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1FBQ3BCLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekI7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sV0FBVyxHQUFHLENBQUMsR0FBVyxFQUFRLEVBQUU7SUFDeEMsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNiLElBQUksR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNwQixZQUFZLEVBQUUsQ0FBQztZQUNmLE9BQU87U0FDUjtRQUNELElBQUksR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUNuQixXQUFXLEVBQUUsQ0FBQztZQUNkLE9BQU87U0FDUjtRQUNELFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNoQjtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtFWVMsIFJPV1MsIEZJRUxELCBLRVlCT0FSRCB9IGZyb20gJy4vY29uc3QuanMnO1xyXG5pbXBvcnQgeyBhZGRMZXR0ZXIsIGRlbGV0ZUxldHRlciwgY2hlY2tXb3JkbGUgfSBmcm9tICcuL2xldHRlck9wZXJhdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBnYW1lT3ZlciB9IGZyb20gJy4vbGV0dGVyT3BlcmF0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGdldFdvcmRsZSB9IGZyb20gJy4vZ2V0V29yZGxlLmpzJztcclxuXHJcbmdldFdvcmRsZSgpO1xyXG5cclxuUk9XUy5mb3JFYWNoKChyb3c6IHN0cmluZ1tdLCByb3dJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3Qgcm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJvd0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGByb3ctJHtyb3dJbmRleH1gKTtcclxuICByb3cuZm9yRWFjaCgodGlsZTogc3RyaW5nLCB0aWxlSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgdGlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpbGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBgcm93LSR7cm93SW5kZXh9LXRpbGUtJHt0aWxlSW5kZXh9YCk7XHJcbiAgICB0aWxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lLWNvbnRhaW5lcl9fdGlsZScpO1xyXG4gICAgcm93RWxlbWVudC5hcHBlbmQodGlsZUVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gIGlmIChGSUVMRCAhPSBudWxsKSB7XHJcbiAgICBGSUVMRC5hcHBlbmQocm93RWxlbWVudCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbktFWVMuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24udGV4dENvbnRlbnQgPSBrZXk7XHJcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBrZXkpO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IGhhbmRsZUNsaWNrKGtleSkpO1xyXG4gIGlmIChLRVlCT0FSRCAhPSBudWxsKSB7XHJcbiAgICBLRVlCT0FSRC5hcHBlbmQoYnV0dG9uKTtcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgaGFuZGxlQ2xpY2sgPSAoa2V5OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICBpZiAoIWdhbWVPdmVyKSB7XHJcbiAgICBpZiAoa2V5ID09PSAnREVMRVRFJykge1xyXG4gICAgICBkZWxldGVMZXR0ZXIoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGtleSA9PT0gJ0VOVEVSJykge1xyXG4gICAgICBjaGVja1dvcmRsZSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhZGRMZXR0ZXIoa2V5KTtcclxuICB9XHJcbn07Il19