# Quickstart for Module 1: The Robotic Nervous System (ROS 2)

This guide provides the necessary steps to set up your environment to follow the tutorials in this module.

## 1. Install ROS 2 Humble

Follow the official ROS 2 documentation to install ROS 2 Humble Hawksbill on your system. Ubuntu 22.04 (Jammy) is the recommended operating system.

- [ROS 2 Humble Installation Guide](https://docs.ros.org/en/humble/Installation.html)

Make sure to source your ROS 2 setup file after installation:
```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## 2. Install Docusaurus

To run the book website locally, you will need to have Node.js and npm installed. Follow the Docusaurus documentation to set up a new Docusaurus site.

- [Docusaurus Installation Guide](https://docusaurus.io/docs/installation)

## 3. Create a ROS 2 Workspace

You will need a ROS 2 workspace to build and run the tutorial packages.

```bash
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws
colcon build
```

Remember to source your workspace's setup file:
```bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## 4. Install Additional Tools

Some tutorials may require additional tools. These will be specified in the chapters themselves. Common tools include:

- `ros2-control` and `gazebo-ros-pkgs` for more advanced simulations.
- `xacro` for more flexible URDF creation.

You can install these using `apt`:
```bash
sudo apt-get update
sudo apt-get install ros-humble-ros2-control ros-humble-gazebo-ros-pkgs ros-humble-xacro
```
