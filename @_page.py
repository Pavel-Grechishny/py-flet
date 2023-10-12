import flet

def main(page: flet.Page):
    """docstring"""
    
    page.fonts = {
        'font_name': 'Open Sans',
    }
    
    page.theme = flet.Theme(
        font_family='font_name'
    )
    
    page.add(
        flet.Text('Hallo World!')
    )

if __name__ == '__main__':
    flet.app(target=main)
    