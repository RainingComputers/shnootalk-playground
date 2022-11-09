from typing import Dict

import re


file_name_regex = re.compile("\\w+.shtk")


def validate_length(programs: Dict[str, str]) -> bool:
    num_chars = 0

    for _, values in programs.items():
        num_chars += len(values)

    return num_chars < 65536


def validate_keys(programs: Dict[str, str]) -> bool:
    for key, _ in programs.items():
        if key == "input":
            continue

        # Make sure keys match the pattern <file-name>.shtk,
        # no sub directories, letters only
        match = file_name_regex.match(key)

        if match is None:
            return False

        span = match.span()

        if span[0] != 0 or span[1] != len(key):
            return False

    return True


def validate(programs: Dict[str, str]) -> bool:
    if not validate_length(programs):
        return False

    if not validate_keys(programs):
        return False

    return True
