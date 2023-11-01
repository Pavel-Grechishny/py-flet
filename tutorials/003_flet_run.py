import flet

def main(page: flet.Page) -> None:
    page.title = 'Command flet run'
    page.vertical_alignment = 'center'
    page.horizontal_alignment = 'center'
    page.theme_mode = 'dark'
    page.window_width = 360
    page.window_height = 620
    page.window_resizable = False
    page.window_opacity = 1
    
    text: flet.Text = flet.Text(
        value='For online updates, use the command flet run',
        text_align=flet.TextAlign.CENTER,
        width=250,
        size=30,
        color='blue',)
        
    page.add(text)
    
if __name__ == '__main__':
    flet.app(target=main)
   