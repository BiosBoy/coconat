import { ATTACKER, DEFENDER } from '../../constants'

export const HEADER_COORDS = {
  [ATTACKER]: {
    userName: {
      leftOffset: 122,
      topOffset: 137
    },
    hitsIcon: {
      leftOffset: 412,
      topOffset: 135
    },
    hitsCount: {
      leftOffset: 432,
      topOffset: 136
    },
    damageIcon: {
      leftOffset: 465,
      topOffset: 135
    },
    damageCount: {
      leftOffset: 483,
      topOffset: 136
    },
    healthIcon: {
      leftOffset: 515,
      topOffset: 135
    },
    healthCount: {
      leftOffset: 535,
      topOffset: 136
    },
    lifeBar: {
      leftOffset: 122,
      topOffset: 152
    }
  },
  [DEFENDER]: {
    userName: {
      leftOffset: 615,
      topOffset: 137
    },
    hitsIcon: {
      leftOffset: 905,
      topOffset: 135
    },
    hitsCount: {
      leftOffset: 925,
      topOffset: 136
    },
    damageIcon: {
      leftOffset: 958,
      topOffset: 135
    },
    damageCount: {
      leftOffset: 976,
      topOffset: 136
    },
    healthIcon: {
      leftOffset: 1008,
      topOffset: 135
    },
    healthCount: {
      leftOffset: 1028,
      topOffset: 136
    },
    lifeBar: {
      leftOffset: 615,
      topOffset: 152
    }
  }
}

export const MODAL_COORDS = {
  [ATTACKER]: {
    wrap: {
      leftOffset: 112,
      topOffset: 163
    }
  },
  [DEFENDER]: {
    wrap: {
      leftOffset: 605,
      topOffset: 163
    }
  }
}

export const MODEL_COORDS = {
  [ATTACKER]: {
    wrap: {
      leftOffset: 112,
      topOffset: 163
    },
    layers: {
      leftOffset: 155,
      topOffset: 164
    },
    container: {
      leftOffset: 155,
      topOffset: 184
    },
    image: {
      leftOffset: 155,
      topOffset: 184
    }
  },
  [DEFENDER]: {
    wrap: {
      leftOffset: 605,
      topOffset: 163
    },
    layers: {
      leftOffset: 648,
      topOffset: 164
    },
    container: {
      leftOffset: 648,
      topOffset: 184
    },
    image: {
      leftOffset: 648,
      topOffset: 184
    }
  }
}

export const ARMOUR_COORDS = {
  [ATTACKER]: {
    wrap: {
      leftOffset: 155,
      topOffset: 184
    },
    container: {
      leftOffset: 155,
      topOffset: 184
    },
    armour: {
      leftOffset: 155,
      topOffset: 184
    },
    image: {
      leftOffset: 155,
      topOffset: 184
    },
    maskWrap: {
      leftOffset: 155,
      topOffset: 184
    },
    mask: {
      leftOffset: 155,
      topOffset: 184
    },
    backgroundWrap: {
      leftOffset: 155,
      topOffset: 184
    },
    background: {
      leftOffset: 155,
      topOffset: 184
    }
  },
  [DEFENDER]: {
    wrap: {
      leftOffset: 648,
      topOffset: 184
    },
    container: {
      leftOffset: 648,
      topOffset: 184
    },
    armour: {
      leftOffset: 648,
      topOffset: 184
    },
    image: {
      leftOffset: 648,
      topOffset: 184
    },
    maskWrap: {
      leftOffset: 648,
      topOffset: 184
    },
    mask: {
      leftOffset: 648,
      topOffset: 184
    },
    backgroundWrap: {
      leftOffset: 648,
      topOffset: 184
    },
    background: {
      leftOffset: 648,
      topOffset: 184
    }
  }
}

export const WEAPON_COORDS = {
  [ATTACKER]: {
    topWrap: {
      leftOffset: 438,
      topOffset: 168
    },
    topWrapLeftIconFirst: {
      leftOffset: 449,
      topOffset: 168
    },
    topWrapLeftIconLast: {
      leftOffset: 466,
      topOffset: 168
    },
    topLabel: {
      leftOffset: 484,
      topOffset: 164
    },
    topWrapRightIconFirst: {
      leftOffset: 555,
      topOffset: 168
    },
    topWrapRightIconLast: {
      leftOffset: 572,
      topOffset: 168
    },
    weaponImageWrap: {
      leftOffset: 438,
      topOffset: 185
    },
    weaponImage: {
      leftOffset: 466,
      topOffset: 185
    },
    bottomWrap: {
      leftOffset: 438,
      topOffset: 242
    },
    bottomWrapLeftIcon: {
      leftOffset: 446,
      topOffset: 243
    },
    bottomWrapLeftIconValue: {
      leftOffset: 458,
      topOffset: 244
    },
    bottomLabel: {
      leftOffset: 484,
      topOffset: 242
    },
    bottomWrapRightIcon: {
      leftOffset: 552,
      topOffset: 243
    },
    bottomWrapRightIconValue: {
      leftOffset: 564,
      topOffset: 244
    }
  },
  [DEFENDER]: {
    topWrap: {
      leftOffset: 931,
      topOffset: 168
    },
    topWrapLeftIconFirst: {
      leftOffset: 942,
      topOffset: 168
    },
    topWrapLeftIconLast: {
      leftOffset: 959,
      topOffset: 168
    },
    topLabel: {
      leftOffset: 977,
      topOffset: 164
    },
    topWrapRightIconFirst: {
      leftOffset: 1048,
      topOffset: 168
    },
    topWrapRightIconLast: {
      leftOffset: 1065,
      topOffset: 168
    },
    weaponImageWrap: {
      leftOffset: 931,
      topOffset: 185
    },
    weaponImage: {
      leftOffset: 959,
      topOffset: 185
    },
    bottomWrap: {
      leftOffset: 931,
      topOffset: 242
    },
    bottomWrapLeftIcon: {
      leftOffset: 446,
      topOffset: 242
    },
    bottomWrapLeftIconValue: {
      leftOffset: 458,
      topOffset: 243
    },
    bottomLabel: {
      leftOffset: 484,
      topOffset: 242
    },
    bottomWrapRightIcon: {
      leftOffset: 552,
      topOffset: 242
    },
    bottomWrapRightIconValue: {
      leftOffset: 564,
      topOffset: 243
    }
  }
}

export const STATUS_BAR_COORDS = {
  [ATTACKER]: {
    wrap: {
      leftOffset: 113,
      topOffset: 588
    },
    icon: {
      leftOffset: 113,
      topOffset: 588
    },
    desc: {
      leftOffset: 171,
      topOffset: 588
    }
  },
  [DEFENDER]: {
    wrap: {
      leftOffset: 606,
      topOffset: 588
    },
    icon: {
      leftOffset: 606,
      topOffset: 588
    },
    desc: {
      leftOffset: 664,
      topOffset: 588
    }
  }
}
