---
layout: default
title: "NeoCore: A 16-bit RISC CPU with 32-bit Addressing"
description: "Exploring minimalist CPU design for educational purposes"
date: 2025-01-09
categories: [Emulator, C, Systems Programming, Jekyll]
---

## Introduction

NeoCore is a compact CPU architecture designed to balance simplicity and functionality. It combines a 16-bit data path with 32-bit addressing, offering insights into modern memory management while retaining the efficiency of a reduced instruction set. The project serves as a practical platform for studying CPU design, assembly programming, and systems programming concepts.

[![GitHub forks](https://img.shields.io/github/forks/dulatello08/cpu-emulator?label=Forks&logo=github)](https://github.com/dulatello08/cpu-emulator/network)
[![GitHub stars](https://img.shields.io/github/stars/dulatello08/cpu-emulator?label=Stars&logo=github)](https://github.com/dulatello08/cpu-emulator/stargazers)
[![License](https://img.shields.io/github/license/dulatello08/cpu-emulator?label=License&logo=open-source-initiative)](https://github.com/dulatello08/cpu-emulator/blob/main/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/dulatello08/cpu-emulator?label=Last%20Commit&logo=github)](https://github.com/dulatello08/cpu-emulator/commits/main)

## Core Architecture

### Key Features
- **Instruction Set**: 16-bit RISC
- **Memory Addressing**: 32-bit
- **Memory System**: 4KB pages with just-in-time allocation
- **Interrupts**: Maskable with configurable vectors
- **I/O**: Memory-mapped
- **Endianness**: Big-endian

### Memory Management
NeoCore employs a two-step approach to address 32-bit memory spaces. By stacking two 16-bit values, the architecture maintains a clean instruction set while enabling access to up to 4GB of memory:

```assembly
PSH 1        ; Push high 16 bits
PSH 2        ; Push low 16 bits
RLD 3        ; Load from combined 32-bit address into R3
```

The 4KB page size aligns with typical cache systems, offering a practical balance between memory granularity and performance.

## Instruction Set Architecture

The instruction set adheres to RISC principles, with all instructions standardized to 16 bits for simplicity and consistency.

### Registers
- **General Purpose**: 16 registers (R0–R15)
- **Special Registers**: Program Counter (PC)

## Input/Output System

The memory-mapped I/O system is designed for flexibility. Current implementations include:
- **LCD Display Controller**: ASCII character output
- **Keyboard Controller**: Scancode input with status register and interrupt support

## Software Development Tools

### Assembler
The NeoCore assembler supports:
- Label-based addressing
- Macro definitions for reusable code
- Multiple segments
- Symbol table generation

### Emulator
The emulator provides:
- Instruction-level tracing
- Memory access monitoring
- Interrupt simulation
- Peripheral emulation
- INI-based configuration
- Unix socket support for extensibility

## Educational Applications

NeoCore offers a hands-on introduction to key systems programming concepts:
- CPU architecture fundamentals
- Assembly language programming
- Memory management techniques
- Interrupt handling
- I/O device interfacing

By interacting with NeoCore, learners can deepen their understanding of both theoretical and practical aspects of computer architecture.

## Future Developments

Planned updates include:
- Integration of additional peripherals
- DMA controller support
- Extended instruction set for floating-point operations
- Enhanced memory protection
- Improved debugging capabilities

## Technical Specifications

### Memory
- **Address Space**: 32-bit (4GB)
- **Page Size**: 4KB
- **Word Size**: 16-bit
- **Endianness**: Big-endian

### Interrupts
- Non-maskable interrupt system
- Software-configurable vector table
- Push-all/Pop-all for context switching

### Clock and Timing
- Single-cycle execution for all instructions

## License and Disclaimer

NeoCore is released under the **GNU General Public License v3.0 (GPL-3.0)**. The project is provided "as is," without any warranty of any kind, either expressed or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, or non-infringement. Users assume all risks associated with its use. For full license details, refer to the accompanying LICENSE file.

---

*Contributions and feedback are welcome. For more details, refer to the project repository.*