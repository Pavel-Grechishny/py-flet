# import flet as ft

from flet import Page
from flet import MainAxisAlignment
from flet import TextField
from flet import TextAlign
from flet import Row
from flet import IconButton
from flet import icons as Icons
from flet import app as APP

def main(page: Page):
    """doc"""

    page.title = "Flet counter example"
    page.vertical_alignment = MainAxisAlignment.CENTER
    step = 1
    txt_number = TextField(value="0", text_align=TextAlign.RIGHT, width=100)
    
    def minus_click(e):
        """doc"""
        #print(e)
        txt_number.value = str(int(txt_number.value) - step)
        page.update()
        
    def plus_click(e):
        """doc"""
        txt_number.value = str(int(txt_number.value) + step)
        page.update()  

    page.add(
        Row(
            [
                IconButton(Icons.REMOVE, on_click=minus_click),
                txt_number,
                IconButton(Icons.ADD, on_click=plus_click)
            ],
            alignment=MainAxisAlignment.CENTER,
        )
    )
# APP(target=main, view=ft.WEB_BROWSER)    
# APP(target=main)
    
# >>>print(e)
# <flet_core.control_event.ControlEvent object at 0x000001A699760FD0>

# >>> globals()
# {
    # '__name__': '__main__',
    # '__doc__': None,
    # '__package__': None,
    # '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x000001719FEB47D0>,
    # '__spec__': None,
    # '__annotations__': {},
    # '__builtins__': <module 'builtins' (built-in)>,
    # 'Page': <class 'flet_core.page.Page'>,
    # 'MainAxisAlignment': <enum 'MainAxisAlignment'>,
    # 'TextField': <class 'flet_core.textfield.TextField'>,
    # 'TextAlign': <enum 'TextAlign'>,
    # 'Row': <class 'flet_core.row.Row'>,
    # 'IconButton': <class 'flet_core.icon_button.IconButton'>,
    # 'Icons': <module 'flet_core.icons' from 'C:\\Python311\\Lib\\site-packages\\flet_core\\icons.py'>, 
    # 'APP': <function app at 0x00000171A37C11C0>,
    # 'main': <function main at 0x00000171A00944A0>
# }