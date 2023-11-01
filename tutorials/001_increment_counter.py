import flet
from flet import TextField
from flet_core.control_event import ControlEvent


def main(page: flet.Page) -> None:
    page.title = 'Increment counter'
    page.vertical_alignment = flet.MainAxisAlignment.CENTER
    # page.theme_mode = 'dark'
    page.window_width = 360
    page.window_height = 620
    page.window_resizable = False
    page.window_opacity = 0.9
    
    text_number: TextField = TextField(value='0', text_align=flet.TextAlign.RIGHT, width=100)
    
    def decrement(e: ControlEvent) -> None:
        text_number.value = str(int(text_number.value) - 1)
        page.update()
        
    def increment(e: ControlEvent) -> None:
        text_number.value = str(int(text_number.value) + 1)
        page.update()
          
    page.add(
        flet.Row([
            flet.IconButton(flet.icons.REMOVE, on_click=decrement), 
            text_number,
            flet.IconButton(flet.icons.ADD, on_click=increment)],
            alignment=flet.MainAxisAlignment.CENTER
        )
    )
    
if __name__ == '__main__':
    # flet.app(target=main, view=flet.AppView.WEB_BROWSER)
    flet.app(target=main)