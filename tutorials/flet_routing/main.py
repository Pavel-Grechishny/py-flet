import flet
from importlib.util import spec_from_file_location, module_from_spec
from pathlib import Path
from sys import path, modules

import assets.style as style 
import views.view_1 as view_1
import views.view_2 as view_2

# print(style.background)
body = flet.Container(
    bgcolor = style.colors['red'],
    width = 250,
    height = 250,
)





def main(page: flet.Page) -> None:

    
    print(f'{view_1.check=}\n{view_1.title=}\n{view_1.data=}\n')
    print(f'{view_2.check=}\n{view_2.title=}\n{view_2.data=}\n')
    
    page.title = view_1.title
    page.window_width = 360
    page.window_height = 620
    page.window_resizable = True
    page.window_opacity = 1
    page.bgcolor = style.background
    page.add(
        body
    )
    page.update()


flet.app(target=main)



# import flet

# # >>> flet.Page -> <class 'flet_core.page.Page'>
# # >>> flet.Container -> <class 'flet_core.container.Container'>
# # >>> flet.page -> <module 'flet_core.page' from 'C:\\Python311\\Lib\\site-packages\\flet_core\\page.py'>
# # >>> flet.app -> <function app at 0x000001CFAABF11C0>

# Page = flet.Page
# Container = flet.Container

# page = flet.page
# app = flet.app

# body = flet.Container()
# print('===============')
# def manage(Page: Page) -> None:
# app(manage)


