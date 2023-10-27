import flet

def main(page: flet.Page):
    """docstring"""
    page.title = 'apppy'
    page.fonts = {
        'font_name': 'Open Sans',
    }
    
    page.theme = flet.Theme(
        font_family='font_name',
    )
    
    page.bgcolor=flet.colors.BLUE    
    
    header = flet.Container(
        content=flet.ElevatedButton('Header'),
        bgcolor=flet.colors.YELLOW,
        
    )
    
    content = flet.Container(
        content=flet.ElevatedButton('Content'),
        bgcolor=flet.colors.ORANGE,
        
    )
    
    footer = flet.Container(
        content=flet.ElevatedButton('Footer'),
        bgcolor=flet.colors.ORANGE,
        
    )
    
    page.add(
        header, 
        content,
        footer,
    )

if __name__ == '__main__':
    flet.app(target=main)
    # flet.app(target=main, view=flet.WEB_BROWSER)