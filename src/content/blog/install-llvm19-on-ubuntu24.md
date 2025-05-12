---
title: "Install LLVM 19 and necessary tools for compiler development on ubuntu 24.04"
description: "LLVM 19, clang, cmake, libffi, libxml2 and zlib installation on ubuntu 24.0.4"
publishedAt: 2025-05-12
tags: ["llvm", "linux", "ubuntu", "compiler-design"]
---

This guide walks you through installing the essential development tools and libraries for C/C++ and compiler development on **Ubuntu 24.04**:

- LLVM 19 + Clang
- CMake
- libffi
- libxml2
- zlib

## ⚙️ Prerequisites

Make sure your system is up to date:

```bash
sudo apt update
sudo apt upgrade -y
```

You’ll also need basic developer tools:

```bash
sudo apt install -y build-essential wget curl gnupg software-properties-common
```

---

## 🧠 Step 1: Install LLVM 19 and Clang

Ubuntu 24.04 doesn't include LLVM 19 in its default repositories, so you’ll need to add the official LLVM APT repository.

### Add the LLVM APT Repository

```bash
# Add the official LLVM GPG key
wget https://apt.llvm.org/llvm.sh
chmod +x llvm.sh
sudo ./llvm.sh 19
```

This will install:

- `clang-19`
- `llvm-19`
- `lld-19`
- `libclang-19-dev`

### Make Clang 19 the Default (optional)

```bash
sudo update-alternatives --install /usr/bin/clang clang /usr/bin/clang-19 100
sudo update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-19 100
```

---

## 🧰 Step 2: Install CMake

Ubuntu 24.04 ships with a relatively recent version of CMake. You can install it directly via:

```bash
sudo apt install -y cmake
```

> Need a newer version? You can get the latest from [Kitware’s CMake Snap or source](https://cmake.org/download/).

---

## 🧬 Step 3: Install libffi

```bash
sudo apt install -y libffi-dev
```

This installs both the runtime and development headers for `libffi`.

---

## 📄 Step 4: Install libxml2

```bash
sudo apt install -y libxml2 libxml2-dev
```

This includes the runtime library and development headers.

---

## 🗜️ Step 5: Install zlib

```bash
sudo apt install -y zlib1g zlib1g-dev
```

`zlib1g` is the core compression library, and `zlib1g-dev` provides headers needed to compile against it.

---

## ✅ Verification

After installing, you can verify versions:

```bash
clang-19 --version
cmake --version
pkg-config --modversion libffi
pkg-config --modversion libxml-2.0
```

---

## 🧪 Troubleshooting

If you run into errors like missing packages or 404s during `apt install`, try updating your package list again:

```bash
sudo apt update
```

If you're building LLVM-related projects, ensure you are using the correct Clang and LLVM versions by setting environment variables like:

```bash
export CC=clang-19
export CXX=clang++-19
```

---

## 🙌 You're Ready

You now have a modern LLVM toolchain with essential libraries installed and ready for development on **Ubuntu 24.04**.

Have questions or need help with building tools? Feel free to ask!
