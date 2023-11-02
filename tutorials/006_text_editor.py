from flet import (
    UserControl,
    TextField,
    InputBorder,
    Page,
    ControlEvent,
    app)

    
class TextEditor(UserControl):
    """docstring"""
    def __init__(self):
        super().__init__()
        self.textfield = TextField(
            multiline=True, 
            autofocus=True, 
            border=InputBorder.NONE, 
            min_lines=40, 
            content_padding=30,
            cursor_color='yellow',
            on_change=self.save_text)


    def save_text(self, e: ControlEvent) -> None:
        """docstring"""
        with open('save.txt', 'w', encoding='utf-8') as fileout:
            fileout.write(self.textfield.value)
        # raise NotImplementedError(f"Функционал 'def save_text()' не реализован...' )


    def read_text(self) -> str | None:
        """docstring"""
        try:
            with open('save.txt', 'r', encoding='utf-8') as filein:
                return filein.read()
        except FileNotFoundError:
            self.textfield.hint_text = 'Welcome to the text editor!'


    def build(self) -> TextField:
        """docstring"""
        self.textfield.value = self.read_text()
        return self.textfield


def main(page: Page) -> None:
    """docstring"""
    page.title = 'Text editor'
    page.scroll = True
    page.bgcolor = 'blue'
    page.window_width = 480
    page.window_height = 620
    page.window_resizable = False
    page.add(TextEditor())
  

if __name__ == '__main__':
    app(target=main)