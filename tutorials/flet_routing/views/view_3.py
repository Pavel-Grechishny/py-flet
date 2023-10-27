from importlib.util import spec_from_file_location, module_from_spec
from pathlib import Path
from sys import path, modules


controller_name = 'controller_3.py'
controller_dir = 'controllers'
parent_dir = Path(path[0]).parent
splitter = parent_dir.root

spec = spec_from_file_location(
    controller_name, 
    f'{parent_dir}{splitter}'
    f'{controller_dir}{splitter}'
    f'{controller_name}')
    
controller = module_from_spec(spec)
modules[controller_name] = controller
spec.loader.exec_module(controller)
print(controller.check)