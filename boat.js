class Boat {
  constructor({
    hasMotor,
    motorCount,
    motorBrand,
    motorModel,
    hasSails,
    sailsCount,
    sailsMaterial,
    sailsColor,
    hullColor,
    hasCabin,
  }) {
    this.hasMotor = hasMotor;
    this.motorCount = motorCount;
    this.motorBrand = motorBrand;
    this.motorModel = motorModel;
    this.hasSails = hasSails;
    this.sailsCount = sailsCount;
    this.sailsMaterial = sailsMaterial;
    this.sailsColor = sailsColor;
    this.hullColor = hullColor;
    this.hasCabin = hasCabin;
  }
}

module.exports = Boat;
