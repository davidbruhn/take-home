# Site layout builder

## Quick start
`yarn && yarn dev`

## Overview

This app allows users to build a configuration of batteries. It displays battery options available to the user, enabling
the user to select a quantity of each, and then provides the total price, energy, and size of the configuration, and provides an example layout.

This displays the data mentioned in the spec and does not mention the transformers, but it should really be made clear that that is part of the costs.

## Layout

This displays an example layout of the batteries selected by the user. It does not display the transformers, as the spec did not request that. It does not optimize by fitting into, say, the smallest number of rows or into a rectangle of the smallest size.
