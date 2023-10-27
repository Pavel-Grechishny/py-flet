from importlib.util import spec_from_file_location, module_from_spec
from pathlib import Path
from sys import path, modules


from controllers import controller_2

check  = controller_2.check    
title = controller_2.title   
data = controller_2.data 
