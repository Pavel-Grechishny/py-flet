import flet


class IncrementCounter(flet.UserControl):
    """docstring"""
    def __init__(self, text: str, start_number: int = 0):
        super().__init__()
        self.text = text
        self.counter = start_number
        self.text_number: flet.Text = flet.Text(value=str(start_number), size=30)
        
    def increment(self, e: flet.ControlEvent) -> None:
        """docstring"""
        self.counter += 1
        self.text_number.value = str(self.counter)
        self.update()
        
    def build(self) -> flet.Row:
        """docstring"""
        return flet.Row(
                    controls=[
                        flet.ElevatedButton(self.text, on_click=self.increment, color='yellow'), 
                        self.text_number],
                    alignment=flet.MainAxisAlignment.SPACE_BETWEEN,
                    width=300)


def main(page: flet.Page) -> None:
    page.title = 'Components'
    page.vertical_alignment = 'center'
    page.horizontal_alignment = 'center'
    page.theme_mode = 'dark'
    page.window_width = 360
    page.window_height = 620
    page.window_resizable = False
    page.window_opacity = 0.95
    
    # TODO: 3 increment counters
    page.add(IncrementCounter('Counter 1'))
    page.add(IncrementCounter('Counter 2', 20))
    page.add(IncrementCounter('Counter 3', 1000))
    page.add(IncrementCounter('Counter 4'))
    page.add(IncrementCounter('Counter 5'))
    page.add(IncrementCounter('Counter 6'))
    page.add(IncrementCounter('Counter 7'))
    
    
    
if __name__ == '__main__':
    flet.app(target=main)