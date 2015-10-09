
w.Gear = function (a, b, c) {

    return world.createJoint(Gear(a, b, c))
    function Gear(bA, bB, ratio) {
        var gearJoint = new b2d.Joints.b2GearJointDef()
        gearJoint.joint1 = bA
        gearJoint.joint2 = bB
        gearJoint.bodyA = bA.GetBodyA()
        gearJoint.bodyB = bB.GetBodyA()
        gearJoint.ratio = N(ratio) ? ratio : 1
        return gearJoint
    }
}

PulleyJoint = pJt = function () {

    bPJD = BXJ.b2PulleyJointDef
    bPJ = BXJ.b2PulleyJoint

    var j = SuperJoint(new BXJ.b2PulleyJointDef())


    j.init = j.i = function () {
        j.Initialize.apply(j, G(arguments))
        return j
    }

    j.lenA = j.lA = function (a) {
        j.lengthA = a;
        return j
    }
    j.lenB = j.lB = function (a) {
        j.lengthB = a;
        return j
    }

    j.maxLenA = j.mLA = function (a) {
        j.maxLengthA = a;
        return j
    }
    j.maxLenB = j.mLB = function (a) {
        j.maxLengthB = a;
        return j
    }

    return j
}
SuperPulleyJoint = sPJ = function (x, y) {


    x = N(x) ? x : 100
    y = N(y) ? y : x

    b11 = w.A(bx1 = b2d.dynamicDef(x, y), fix())
    b22 = w.A(bx2 = b2d.dynamicDef(x, y), fix())


    var pulley = PulleyJoint()

        .init(
        b11,

        b22,

        b2d.V(15, 1),

        b2d.V(15, 2),

        b11.worldCenter(),

        b22.worldCenter(),

        1
    )

        .lenA(8)
        .lenB(4)
        .maxLenA(10)
        .maxLenB(5)

    w.J(pulley)

}
//SuperPulleyJoint.$$=function(){x.$$(sPJ)}
