import { wordle } from './getWordle.js';
import { keyboardColors } from './keyboardColors.js';
import { row } from './letterOperations.js';
export const flipColorsAnimation = () => {
    const parentRow = document.querySelector(`#row-${row}`);
    let wordleCheck = wordle;
    const userWordle = [];
    if (parentRow != null) {
        const tiles = Object.values(parentRow.childNodes);
        tiles.forEach((tile, index) => {
            const tileData = tile.getAttribute('data');
            if (tileData != null) {
                userWordle.push({
                    key: tileData,
                    color: 'color_grey'
                });
                userWordle.forEach((letter, index) => {
                    if (letter.key == wordle[index]) {
                        letter.color = 'color_green';
                        wordleCheck = wordleCheck.replace(letter.key, '');
                    }
                    if (wordleCheck.includes(letter.key)) {
                        letter.color = 'color_yellow';
                        wordleCheck = wordleCheck.replace(letter.key, '');
                    }
                });
                setTimeout(() => {
                    tile.classList.add('game-container__tile_flip-animation');
                    tile.classList.add(userWordle[index].color);
                    keyboardColors(userWordle[index].key, userWordle[index].color);
                }, 300 * index);
            }
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcENvbG9yc0FuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbGlwQ29sb3JzQW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVDLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLEdBQVMsRUFBRTtJQUM1QyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN4RCxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDekIsTUFBTSxVQUFVLEdBQWEsRUFBRSxDQUFDO0lBQ2hDLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtRQUNyQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQWtCLENBQUM7UUFDbkUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQWlCLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDakQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLFVBQVUsQ0FBQyxJQUFJLENBQ2I7b0JBQ0UsR0FBRyxFQUFFLFFBQVE7b0JBQ2IsS0FBSyxFQUFFLFlBQVk7aUJBQ3BCLENBQ0YsQ0FBQztnQkFDRixVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBYyxFQUFFLEtBQWEsRUFBRSxFQUFFO29CQUNuRCxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUMvQixNQUFNLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQzt3QkFDN0IsV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztxQkFDbkQ7b0JBQ0QsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDcEMsTUFBTSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7d0JBQzlCLFdBQVcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7cUJBQ25EO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQyxHQUFTLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqRSxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExldHRlciB9IGZyb20gJy4vdHlwZXMuanMnO1xyXG5pbXBvcnQgeyB3b3JkbGUgfSBmcm9tICcuL2dldFdvcmRsZS5qcyc7XHJcbmltcG9ydCB7IGtleWJvYXJkQ29sb3JzIH0gZnJvbSAnLi9rZXlib2FyZENvbG9ycy5qcyc7XHJcbmltcG9ydCB7IHJvdyB9IGZyb20gJy4vbGV0dGVyT3BlcmF0aW9ucy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmxpcENvbG9yc0FuaW1hdGlvbiA9ICgpOiB2b2lkID0+IHtcclxuICBjb25zdCBwYXJlbnRSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcm93LSR7cm93fWApO1xyXG4gIGxldCB3b3JkbGVDaGVjayA9IHdvcmRsZTtcclxuICBjb25zdCB1c2VyV29yZGxlOiBMZXR0ZXJbXSA9IFtdO1xyXG4gIGlmIChwYXJlbnRSb3cgIT0gbnVsbCkge1xyXG4gICAgY29uc3QgdGlsZXMgPSBPYmplY3QudmFsdWVzKHBhcmVudFJvdy5jaGlsZE5vZGVzKSBhcyBIVE1MRWxlbWVudFtdO1xyXG4gICAgdGlsZXMuZm9yRWFjaCgodGlsZTogSFRNTEVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3QgdGlsZURhdGEgPSB0aWxlLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xyXG4gICAgICBpZiAodGlsZURhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgIHVzZXJXb3JkbGUucHVzaChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiB0aWxlRGF0YSxcclxuICAgICAgICAgICAgY29sb3I6ICdjb2xvcl9ncmV5J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdXNlcldvcmRsZS5mb3JFYWNoKChsZXR0ZXI6IExldHRlciwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgaWYgKGxldHRlci5rZXkgPT0gd29yZGxlW2luZGV4XSkge1xyXG4gICAgICAgICAgICBsZXR0ZXIuY29sb3IgPSAnY29sb3JfZ3JlZW4nO1xyXG4gICAgICAgICAgICB3b3JkbGVDaGVjayA9IHdvcmRsZUNoZWNrLnJlcGxhY2UobGV0dGVyLmtleSwgJycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHdvcmRsZUNoZWNrLmluY2x1ZGVzKGxldHRlci5rZXkpKSB7XHJcbiAgICAgICAgICAgIGxldHRlci5jb2xvciA9ICdjb2xvcl95ZWxsb3cnO1xyXG4gICAgICAgICAgICB3b3JkbGVDaGVjayA9IHdvcmRsZUNoZWNrLnJlcGxhY2UobGV0dGVyLmtleSwgJycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdnYW1lLWNvbnRhaW5lcl9fdGlsZV9mbGlwLWFuaW1hdGlvbicpO1xyXG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKHVzZXJXb3JkbGVbaW5kZXhdLmNvbG9yKTtcclxuICAgICAgICAgIGtleWJvYXJkQ29sb3JzKHVzZXJXb3JkbGVbaW5kZXhdLmtleSwgdXNlcldvcmRsZVtpbmRleF0uY29sb3IpO1xyXG4gICAgICAgIH0sIDMwMCAqIGluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59OyJdfQ==